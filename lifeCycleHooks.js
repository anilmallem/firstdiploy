import { LightningElement , track} from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import pdf from '@salesforce/resourceUrl/PdfFile';

export default class LifeCycleHooks extends NavigationMixin(LightningElement) {
    viewPdf = pdf;
    @track display = false;    // constructor(){
    //     super();
    //     console.log('Constructor');

    // }
    // connectedCallback(){
    //     console.log('Connected Callback');
    // }
    // renderedCallback(){
    //     console.log('rendered callback');
    // }
    Navigate(){
        this.display =true;
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__objectPage',
        //     attributes: {
        //         objectApiName: 'Account',
        //         actionName: 'new'
        //     }
        // });
    }
}