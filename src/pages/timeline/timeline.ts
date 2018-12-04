import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Timeline } from '../../model/timeline';
import { TimelineService } from '../../services/timeline.service';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  public posts: Timeline[]= [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public postsService: TimelineService)  {
   
    this.postsService.getPosts()
    .subscribe(response => {
      console.log(response);
      this.posts=response; 
    })

  }

  detalheNoticia(id: string){
    this.navCtrl.push('DetalheNoticiaPage',{'id': id});
  }

}
