create database Sample;
use Sample;

create table employee
(
	emp_id int primary key,
    emp_name varchar(20),
    age int,
    address varchar(20),
    salary decimal(10,2)
);

delimiter //
create procedure inserting
(
	in p_emp_id int,
    in p_emp_name varchar(20),
    in p_age int,
    in p_address varchar(20),
    in p_salary decimal(10,2)
)

Begin
	insert into employee (emp_id,emp_name,age,address,salary) values(p_emp_id,p_emp_name,p_age,p_address,p_salary);
End 

delimiter //

create procedure retrieving
(
	in p_emp_id int
)

Begin
	select * from employee where emp_id = p_emp_id;
End

delimiter //

create procedure updating 
(
	in p_emp_id int,
    in p_emp_name varchar(20),
    in p_age int,
    in p_address varchar(20),
    in p_salary decimal(10,2)
)
Begin
	update employee
    set
		emp_id = p_emp_id,
		emp_name = p_emp_name,
		age = p_age,
		address = p_address,
		salary = p_salary
    where emp_id = p_emp_id;
End
	
delimiter //

create procedure deleting
(
	in p_emp_id int
)
Begin
	delete from employee where emp_id = p_emp_id;
End
 
 delimiter //
CALL inserting(101,'Steve',28,'Australia',30000);
CALL inserting(102,'Marcus',30,'England',40000);
CALL inserting(103,'john',31,'scotland',42000);
CALL inserting(104,'David',36,'America',50000);

delimiter //
CALL retrieving(103);

delimiter //
CALL updating('103','Adam',31,'scotland',58000);

delimiter //
CALL deleting(104);


    
