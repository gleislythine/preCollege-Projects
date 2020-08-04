/**
 * Chyna Sarmiento
 * 17 Septemer 2017
 * P1: AP Computer Science
 * 
 * Chapter 5 Exercise 16: Trigonometry Functions
 */

import java.util.Scanner;
import java.lang.Math;
import java.text.NumberFormat;

public class c5e16_TrigFunctions{
    public static void main(String[] args){
    	NumberFormat decimal = NumberFormat.getNumberInstance();
    				 decimal.setMaximumFractionDigits(3);
    	double x, rad, sin, cos, tan;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter an angle in degrees: ");
    		x = input.nextDouble();
    	input.close();
    	
    	rad = Math.toRadians(x);
    	sin = Math.sin(rad);
    	cos = Math.cos(rad);
    	tan = Math.tan(rad);
    	
    	System.out.println("Sine: "   + decimal.format(sin));
    	System.out.println("Cosine: " + decimal.format(cos));
    	System.out.println("Tangent: "+ decimal.format(tan));
    }
}