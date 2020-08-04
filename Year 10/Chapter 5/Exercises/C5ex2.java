/**
 *  PackageCheck
 */

import java.util.Scanner;

public class C5ex2 {
    public static void main(String [] Args) {
    	
    	int weight, length, width, height, cubicCM;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter package weight in kilograms: ");
    		weight = input.nextInt();
    		
    		System.out.print("Enter package length in centimeters: ");
    		length = input.nextInt();
    		
    		System.out.print("Enter package width in centimeters: ");
    		width  = input.nextInt();
    		
    		System.out.print("Enter package height in centimeters: ");
    		height = input.nextInt();
    	input.close();
    	
    	cubicCM = length * width * height;
    	
    		   if ( (weight > 27) && (cubicCM > 100000) ){
    		      System.out.println("Too heavy and too large.");
    		
    	} else if  (weight > 27){
    		       System.out.println("Too heavy.");
    		
    	} else if (cubicCM > 100000){
    		       System.out.println("Too large.");}
    }
}