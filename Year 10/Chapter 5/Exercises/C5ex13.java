/**
 *  CarPayment
 */

import java.util.Scanner;
import java.text.NumberFormat;

public class C5ex13 {
    public static void main(String [] Args) {
    	NumberFormat money = NumberFormat.getCurrencyInstance();
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Principal: ");
    		int    p = input.nextInt();
    		
    		System.out.print("Interest Rate: ");
    		double r = input.nextDouble();
    		
    		System.out.print("Number of monthly payments: ");
    		int    m = input.nextInt();
    	input.close();
    	
    	double r12 = r / 12;
    	double mPay = (p * r12) / ( 1 - Math.pow((1 + r12), -m) );
    	System.out.println("The monthly payment is " + money.format(mPay));
    }
}