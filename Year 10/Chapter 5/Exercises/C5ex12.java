/**
 *  MyPow
 */
import java.util.Scanner;
import java.lang.Math;

public class C5ex12 {
    public static void main(String [] Args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter a value for X: ");
    		double x = input.nextDouble();
    	
    		System.out.print("Enter a value for Y: ");
    		double y = input.nextDouble();
    	input.close();
    	
    	double formula = Math.exp(y * Math.log(x) );
    	double mathpow = Math.pow(x, y);
    	System.out.println("The result from the formula is: " + formula);
    	System.out.println("The result from using the Math.pow() method is: " + mathpow);
    }
}