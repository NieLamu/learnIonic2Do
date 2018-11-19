import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Dialogs} from "@ionic-native/dialogs";

/**
 * Generated class for the TaskListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html',
})
export class TaskListPage {
  tasks:FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afdb: AngularFireDatabase,public dialogs: Dialogs) {
    this.tasks = afdb.list("/tasks");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskListPage');
  }

  addItem() {
    //添加条目 使用ionic-native
    this.dialogs.prompt("Add a task","Your 2Do",["OK","CANCLE"],"feed my cat").then(
      theResult => {
        if ((theResult.buttonIndex==1)&&(theResult.input1!="")){
          this.tasks.push({title:theResult.input1,status:"open"});
        }
      }
    )
  }

  removeTask(slidingItem:ItemSliding,task) {
    //删除条目
    this.tasks.remove(task.$key);
    slidingItem.close();
  }

  markAsDone(slidingItem:ItemSliding,task) {
    //完成任务
    this.tasks.update(task.$key,{status:"done"});
    slidingItem.close();
  }
}

