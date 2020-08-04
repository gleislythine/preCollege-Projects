/**
 * Chyna Sarmiento
 * 25 October 2017
 * P1: AP Computer Science
 * 
 * Chapter 08 Exercise 01: My Savings
 * Client Code
 */

import java.util.Scanner;
import java.text.NumberFormat;

public class MySavings{
    public static void main(String[] args){
    	PiggyBank pbObject = new PiggyBank();
    	int userChoice;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.println("1. Show total in bank.");
    		System.out.println("2. Add a penny.");
    		System.out.println("3. Add a nickel.");
    		System.out.println("4. Add a dime.");
    		System.out.println("5. Add a quarter.");
    		System.out.println("6. Take money out of bank.");
    		System.out.println("Enter 0 to quit\n");
    		
    		do{
    			System.out.print("Enter your choice: ");
    			userChoice = input.nextInt();
    			
    			pbObject.moneyDo(userChoice);
    		} while(userChoice != 0);
    }
}