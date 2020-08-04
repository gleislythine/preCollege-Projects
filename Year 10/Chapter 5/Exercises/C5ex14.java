/**
 *  BacteriaGrowth
 */

import java.util.Scanner;
import java.text.NumberFormat;

public class C5ex14 {
    public static void main(String [] Args) {
    				 
    	double y, n, k, t;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter initial bacteria amount: ");
    		n = input.nextDouble();
    		
    		System.out.print("Enter a constant value for k: ");
    		k = input.nextDouble();
    		
    		System.out.print("Enter the growth time period in hours: ");
    		t = input.nextDouble();
    	input.close();
    	
    	y = n * Math.exp(k * t);
    	System.out.println((int)y + " bacteria will be present after " + t + " hours.");
    }
}