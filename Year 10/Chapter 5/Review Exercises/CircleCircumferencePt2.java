/**
 *  Circle Circumference Part 2
 */

import java.util.Scanner;
import java.text.NumberFormat;

public class CircleCircumferencePt2 {
    public static void main(String [] args) {
    	NumberFormat decimal = NumberFormat.getNumberInstance();
    				 decimal.setMaximumFractionDigits(2);
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the value of the radius: ");
    		double r = input.nextInt();
    	input.close();
    	
    	double c = 2 * Math.PI * r;
    	if (r < 0){
    		System.out.println("Negative radii are illegal.");
    	} else{
    		System.out.println("The circumference of the circle is: " + decimal.format(c) );
    	}
    }
}