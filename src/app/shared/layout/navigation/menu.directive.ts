import { Directive, AfterViewInit, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appMenu]'
})
export class MenuDirective implements AfterViewInit {

  private $menu: any;

  constructor(
    private menu: ElementRef
  ) {
    this.$menu = $(this.menu.nativeElement);
   }

  parser = (domstring) => {
    const html = new DOMParser().parseFromString(domstring, 'text/html');

    return Array.from(html.body.childNodes);
  }

  onClick(event) {
    console.log(event);
  }

  public ngAfterViewInit() {
    // const menu = this.menu.nativeElement.querySelectorAll(':scope li ul');
    // const sign = '<b class="collapse-sign"><em class="fa fa-plus-square-o"/></b>';
    // for (let i = 0; i < menu.length; i++) {
    //   const $a = menu[i].parentNode.querySelector('a');
    //   $a.insertAdjacentHTML('beforeend', sign);
    //   $a.addEventListener('click', this.onClick.bind(this));
    //   console.log($a);
    // }

    this.$menu.find('li:has(> ul)').each((i, li) => {
      const $menuItem = $(li);
      const $a = $menuItem.find('>a');
      const sign = $('<b class="collapse-sign"><em class="fa fa-plus-square-o"/></b>');

      $a.on('click', (e) => {
        this.toggle($menuItem);
        e.stopPropagation();
        return false;
      }).append(sign);
    });
  }

  private toggle($el, condition = !$el.data('open')) {
    $el.toggleClass('open', condition);

    if (condition) {
      $el.find('>ul').slideDown();
    } else {
      $el.find('>ul').slideUp();
    }

    $el.find('>a>.collapse-sign>em')
      .toggleClass('fa-plus-square-o', !condition)
      .toggleClass('fa-minus-square-o', condition);

    $el.data('open', condition);

    if (condition) {
      $el.siblings('.open').each((i, it) => {
        const sib = $(it);
        this.toggle(sib, false);
      });
    }
  }

}
