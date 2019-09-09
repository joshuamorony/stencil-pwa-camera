import { Component, h } from "@stencil/core";
import { Plugins, CameraResultType } from "@capacitor/core";

const { Camera } = Plugins;

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  async takePicture() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl
    });

    console.log(image);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-button onClick={() => this.takePicture()}>Take photo</ion-button>
      </ion-content>
    ];
  }
}
