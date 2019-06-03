import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackEndFeedback } from '../../../components/back-end-feedback/backEndFeedback';
import { Dragon } from '../dragon';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'app-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.scss']
})

export class DragonDetailComponent implements OnInit {

  public update: boolean;
  public id: string;
  public dragon: Dragon;
  public backEndFeedback: BackEndFeedback = {};

  constructor(private dragonService: DragonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.update = this.id != null;

    if (this.update) {
      this.get();
    } else {
      this.dragon = {
        id: '',
        name: '',
        createdAt: '',
        type: ''
      };
    }
  }

  save() {

    const form = <any>document.getElementById('dragon-fields');

    if (form.checkValidity()) {

      if (this.update) {
        this.put();
      } else {
          this.dragon.createdAt = (new Date()).toISOString();
        this.post();
      }

    } else {
      this.backEndFeedback.errorMessage = 'Verifique os campos obrigatórios e/ou campos com valores inválidos.';
      setTimeout(() => { this.backEndFeedback.errorMessage = null; }, 4000);
    }
  }

  get() {
    this.backEndFeedback.loading = true;
    this.dragonService.getById(this.id)
      .subscribe(
        (dragon) => {
          this.dragon = dragon;
          this.backEndFeedback.errorMessage = null;
          this.backEndFeedback.loading = false;
        },
        (error) => {
          this.backEndFeedback.errorMessage = error;
          this.backEndFeedback.loading = false;
        });
  }

  post() {
    this.backEndFeedback.loading = true;
    this.dragonService.post(this.dragon)
      .subscribe(
        (success) => {
          this.dragon = success;
          this.id = success.id;
          this.update = true;
          this.backEndFeedback.successMessage = `Dragão # ${success.id} criado com sucesso!`;
          this.backEndFeedback.errorMessage = null;
          this.backEndFeedback.loading = false;
          setTimeout(() => { this.backEndFeedback.successMessage = null; }, 4000);
        },
        (error) => {
          this.backEndFeedback.errorMessage = error;
          this.backEndFeedback.loading = false;
        });
  }

  put() {
    this.backEndFeedback.loading = true;
    this.dragonService.put(this.id, this.dragon)
      .subscribe(
        (success) => {
          this.backEndFeedback.successMessage = `Dragão # ${success.id} atualizado com sucesso!`;
          this.backEndFeedback.errorMessage = null;
          this.backEndFeedback.loading = false;
          setTimeout(() => { this.backEndFeedback.successMessage = null; }, 4000);
        },
        (error) => {
          this.backEndFeedback.errorMessage = error;
          this.backEndFeedback.loading = false;
        });
  }

  delete() {
    const question = confirm('Deseja mesmo excluir este dragão?');
    if (question) {
      this.backEndFeedback.loading = true;
      this.dragonService.delete(this.id)
        .subscribe(
          (success) => {
            this.dragon = null;
            this.backEndFeedback.successMessage = `Dragão # ${success.id} excluído com sucesso!`;
            this.backEndFeedback.errorMessage = null;
            this.backEndFeedback.loading = false;
            setTimeout(() => {
              this.backEndFeedback.successMessage = null;
              history.back();
            }, 2000);
          },
          (error) => {
            this.backEndFeedback.errorMessage = error;
            this.backEndFeedback.loading = false;
          });
    }
  }
}
