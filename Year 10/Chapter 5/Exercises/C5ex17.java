/**
 * InverseTrigFunctions
 */

import java.util.Scanner;
import java.lang.Math;
import java.text.NumberFormat;

public class C5ex17 {
    public static void main(String [] Args) {
    	NumberFormat decimal = NumberFormat.getNumberInstance();
    				 decimal.setMaximumFractionDigits(3);
    	double x, asin, acos, atan, aRad;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter an angle in degrees: ");
    		x = input.nextDouble();
    	input.close();
    	
    	aRad = Math.toRadians(x);
    	asin = Math.asin(aRad);
    	acos = Math.acos(aRad);
    	atan = Math.atan(aRad);
    	
    	System.out.println("Arcsin: " + decimal.format(asin));
    	System.out.println("Arccos: " + decimal.format(acos));
    	System.out.println("Arctan: " + decimal.format(atan));
    }
}