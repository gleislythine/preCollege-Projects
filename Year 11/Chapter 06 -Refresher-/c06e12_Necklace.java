/**
 * Chyna Sarmiento
 * 17 September 2017
 * P1: AP Computer Science
 * 
 * Chapter 06 Exercise 11: Elapsed Time Calculator
 */

import java.util.Scanner;

public class c06e12_Necklace{
    public static void main(String[] args){
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the first starting number: ");
    		int origFirst    = input.nextInt();
    		
    		System.out.print("Enter the second starting number: ");
    		int origSecond = input.nextInt();
    	input.close();
    	
        int sum;
        int first  = origFirst;
        int second = origSecond;
        
        System.out.print(first + " " + second + " ");
        do{
            sum    = (first + second) % 10;
            first  = second;
            second = sum;
            System.out.print(second + " ");
        }while (first != origFirst || second != origSecond);
    }
}