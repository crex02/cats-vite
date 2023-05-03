<<<<<<< HEAD
import './style.css'

=======
import './style.css';
import './data-service';
import {getCatsPage} from './data-service';

console.log('ciao');

getCatsPage().then(data => {
  console.log(data);
})
>>>>>>> 2fe041ccebf837423ae174934ccfdc0abef79831
