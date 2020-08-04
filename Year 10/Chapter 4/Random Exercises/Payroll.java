import java.util.Scanner;
import java.text.NumberFormat;

public class Payroll {
    public static void main(String [] args) {
    	NumberFormat money = NumberFormat.getCurrencyInstance();
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter Gross Pay: ");
    		int grossPay = input.nextInt();
    		
    		System.out.print("Enter the tax rate: ");
    		double taxRate  = input.nextDouble();
    	input.close();
    	
    	double netPay = grossPay * (1 - taxRate);
    	System.out.println("Net Pay: " + money.format(netPay) );
    }
}