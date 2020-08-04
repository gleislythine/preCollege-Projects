/**
 * Chyna Sarmiento
 * 17 September 2017
 * P1: AP Computer Science
 * 
 * Chapter 06 Exercise 10: GCD
 */

import java.util.Scanner;

public class c06e10_GCD{
    public static void main(String[] args){
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter a number: ");
    		int a = input.nextInt();
    		
    		System.out.print("Enter a second number: ");
    		int b = input.nextInt();
    	input.close();
    	
    	int d = 0;
    	int gcd = 0;
    	
    	if((a != Math.abs(a)) || (b != Math.abs(b))){
    		System.out.println("Enter a non-negative number!");
    	} else{ //a and b is positive
    		if(a == 0){
    			gcd = b;
    		}else if(b == 0){
    			gcd = a;
    		}else if(a > b){
    			gcd = (a % b);
    		} else if(a < b){
    			gcd = (b % a);
    		}
    		System.out.println("The GCD is " + gcd);
    	}
    }
}