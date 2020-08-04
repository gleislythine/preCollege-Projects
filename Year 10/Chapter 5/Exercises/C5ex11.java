/**
 *  QuadraticEquation
 */

import java.util.Scanner;
import java.lang.Math;

public class C5ex11 {
    public static void main(String [] Args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter value for a: ");
    		double a = input.nextDouble();
    		
    		System.out.print("Enter value for b: ");
    		double b = input.nextDouble();
    		
    		System.out.print("Enter value for c: ");
    		double c = input.nextDouble();
    	input.close();
    	
    	double d  = Math.pow(b, 2) - (4 * a * c);
    	double r1 = (-b + Math.sqrt(d) ) / (2 * a);
    	double r2 = (-b - Math.sqrt(d) ) / (2 * a);
    	
    	       if (d >  0){
    	       System.out.println("The roots are " + r1 + " and " + r2);
    	} else if (d == 0){
    		   System.out.println("The root is " + r1);
    	} else {
    		   System.out.println("There are no real roots.");
    	}
    }
}