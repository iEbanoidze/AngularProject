import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-toys-form',
  templateUrl: './toys-form.component.html',
  styleUrls: ['./toys-form.component.css']
})
export class ToysFormComponent implements OnInit {

  @Output()
  toysadd: EventEmitter<any> = new EventEmitter();

  @Input()
  toy: any;
  
  types:string[]=["რბილი", "კონსტრუქტორი", "ფაზლი", "პირამიდები"];
  constructor() { }

  ngOnInit(): void {
    this.toyForm.patchValue({
      idControl: 4
    });
  }

  toyForm= new FormGroup({     
    nameControl:  new FormControl(''),
    priceControl:  new FormControl(''),
    idControl:    new FormControl(''),
    typeControl: new FormControl('')
  });

  saveToy()
  {
    var formValues = this.toyForm.value;
    console.log(formValues);

    var newToy = {"id": formValues.idControl, "name": formValues.nameControl, 
"price": formValues.priceControl, "type": formValues.typeControl};
console.log(newToy);
this.toysadd.emit(newToy);

this.toyForm.patchValue({
  idControl: formValues.idControl + 1
});
  }
}
