/**
 * Chyna Sarmiento
 * 5 October 2017
 * P1: AP Computer Science
 * 
 * Chapter 7: Method Test Run
 */
import java.util.Scanner;

public class MTR{
	public static void add(){
	Scanner input = new Scanner(System.in);
		System.out.print("Enter the first number: ");
		double x = input.nextInt();
		
		System.out.print("Enter the second number");
		double y = input.nextInt();
	input.close();
	
	double add = x + y;
	
	System.out.println(add);
}




/**
public static void sub(){
	Scanner input = new Scanner(System.in);
		System.out.print("Enter the first number: ");
		double x = input.nextInt();
		
		System.out.print("Enter the second number");
		double y = input.nextInt();
	input.close();
	
	double sub = x - y;
	
	System.out.println(sub);
}

public static void mul(){
	Scanner input = new Scanner(System.in);
		System.out.print("Enter the first number: ");
		double x = input.nextInt();
		
		System.out.print("Enter the second number");
		double y = input.nextInt();
	input.close();
	
	double mul = x * y;
	
	System.out.println(mul);
}

public static void div(){
	Scanner input = new Scanner(System.in);
		System.out.print("Enter the first number: ");
		double x = input.nextInt();
		
		System.out.print("Enter the second number");
		double y = input.nextInt();
	input.close();
	
	double div = x / y;
	
	System.out.println(div);
}*/

    public static void main(String[] args){
    Scanner input = new Scanner(System.in);
    	System.out.print("Enter your choice: ");
    	int userChoice = input.nextInt();
    input.close();
    
           /**if(userChoice == 1){ */add();
    } /**else if(userChoice == 2){ sub();
    } else if(userChoice == 3){ mul();
    } else if(userChoice == 4){ div();
    }*/
    
    }
}