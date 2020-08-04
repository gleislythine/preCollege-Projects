/**
 * Chyna Sarmiento
 * 31 October 2017
 * P1: AP Computer Science
 * 
 * Chapter 08 Exercise 02: Digit Extractor
 * Client Code
 */

import java.util.Scanner;

public class DigitExtractor{
    public static void main(String[] args){
    	Num getNumPlace = new Num();
    	String userChoice;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter an integer: ");
    		int userInt = input.nextInt();
    		
    		System.out.println("Show (W)hole Number");
    		System.out.println("Show (O)nes place Number");
    		System.out.println("Show (T)ens place Number");
    		System.out.println("Show (H)undreds place Number");
    		System.out.println("(Q)uit\n");
    		
    		do{
    			userChoice = input.nextLine();
    			System.out.print("Enter your choice: ");
    			    			
    			getNumPlace.theNumber(userInt, userChoice);
    		} while(!userChoice.equalsIgnoreCase("Q"));
    }
}