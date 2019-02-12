import { sandboxOf } from 'angular-playground';
import { EmployeeComponent } from './employee.component';

export default sandboxOf(EmployeeComponent)
  .add('default', {
    template: `<app-employee></app-employee>`
  });
