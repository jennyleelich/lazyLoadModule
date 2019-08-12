import { EmployeeListComponent } from './employee-list.component';
import { MaleEmployeeComponent } from './male-employee/male-employee.component';
import { FemaleEmployeeComponent } from './female-employee/female-employee.component';

export const EMPLOYEE_ROUTES = [
    {
        path: '',
        component: EmployeeListComponent,
        children: [
            {
                path: 'male',
                component: MaleEmployeeComponent
            },
            {
                path: 'female',
                component: FemaleEmployeeComponent
            }
        ]

    }
];
