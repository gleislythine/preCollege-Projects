/**
  * TrigFunctions
  */

import java.util.Scanner;
import java.lang.Math;
import java.text.NumberFormat;

public class C5ex16 {
    public static void main(String [] Args) {
    	NumberFormat decimal = NumberFormat.getNumberInstance();
    				 decimal.setMaximumFractionDigits(3);
    	double x, sin, cos, tan, rad;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter an angle in degrees: ");
    		x = input.nextInt();
    	input.close();
    	
    	rad = Math.toRadians(x);
    	sin = Math.sin(rad);
    	cos = Math.cos(rad);
    	tan = Math.tan(rad);
    	
    	System.out.println("Sine: "    + decimal.format(sin));
    	System.out.println("Cosine: "  + decimal.format(cos));
    	System.out.println("Tangent: " + decimal.format(tan));
    }
}