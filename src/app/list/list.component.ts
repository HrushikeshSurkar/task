import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  addProductForm: FormGroup;
  list: any = []
  Inprogresslist: any = []
  etclist: any = []

  todoAddbtnClick = 'false'
  inProgressAddbtnClick = 'false'
  etcAddbtnClick = 'false'

  addbtnoftodo = 'false'
  constructor(private formbuilder: FormBuilder) {
    this.addProductForm = this.formbuilder.group({
      product: [''],
      description: [''],
    })
  }


  ngOnInit(): void {
    let data = localStorage.getItem('list');
    this.list = JSON.parse(data || '');


    let data1 = localStorage.getItem('Inprogresslist');
    this.Inprogresslist = JSON.parse(data1 || '');

    let data2 = localStorage.getItem('etclist');
    this.etclist = JSON.parse(data2 || '');


  }

  submit() {
    this.list.push(this.addProductForm.value)
    localStorage.setItem('list', JSON.stringify(this.list))
    this.todoAddbtnClick = 'false'
    this.addbtnoftodo = 'false'
    this.clear()
  }
  submit1() {
    this.Inprogresslist.push(this.addProductForm.value)
    localStorage.setItem('Inprogresslist', JSON.stringify(this.Inprogresslist))
    this.inProgressAddbtnClick = 'false'
    this.addbtnoftodo = 'false'
    this.clear()

  }
  submit2() {
    this.etclist.push(this.addProductForm.value)
    localStorage.setItem('etclist', JSON.stringify(this.etclist))
    this.etcAddbtnClick = 'false'
    this.addbtnoftodo = 'false'
    this.clear()

  }

  delete(i: any) {
    this.list.splice(i, 1);
    localStorage.setItem('list', JSON.stringify(this.list));
  }
  delete1(i: any) {
    this.Inprogresslist.splice(i, 1);
    localStorage.setItem('Inprogresslist', JSON.stringify(this.Inprogresslist));
  }
  delete2(i: any) {
    this.etclist.splice(i, 1);
    localStorage.setItem('etclist', JSON.stringify(this.etclist));
  }

  save() {
    localStorage.setItem('list', JSON.stringify(this.list));
    localStorage.setItem('Inprogresslist', JSON.stringify(this.Inprogresslist));
    localStorage.setItem('etclist', JSON.stringify(this.etclist));
  }

  addtoinprogress(i: any) {
    this.Inprogresslist.push(this.list[i])
    this.list.splice(i, 1)

    this.save()
  }
  backtolist(i: any) {
    this.list.push(this.Inprogresslist[i])
    this.Inprogresslist.splice(i, 1)
    this.save()

  }
  addtoetc(i: any) {
    this.etclist.push(this.Inprogresslist[i])
    this.Inprogresslist.splice(i, 1)
    this.save()

  }
  backToInProgress(i: any) {
    this.Inprogresslist.push(this.etclist[i])
    this.etclist.splice(i, 1)
    this.save()
  }

  clear() {
    this.addProductForm.reset();
  }
}
