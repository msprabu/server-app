import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-input',
  templateUrl: './server-input.component.html',
  styleUrls: ['./server-input.component.css']
})
export class ServerInputComponent implements OnInit {

  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bpCreated = new EventEmitter<{bpName:string,bpContent:string}>();


  newServerName='';
  newServerContent='';

  constructor() { }

  ngOnInit() {
  }


  onAddServer() {
    console.log("Server added: "+this.newServerName);
   this.serverCreated.emit({serverName:this.newServerName, serverContent:this.newServerContent});
  }

  onAddBlueprint() {
    this.bpCreated.emit({bpName:this.newServerName, bpContent:this.newServerContent});

}

}
