import java.util.Scanner;
import java.text.NumberFormat;

public class C4ex15 {
    public static void main(String [] Args) {
    	
    	NumberFormat money  = NumberFormat.getCurrencyInstance();
    	             money.setMinimumFractionDigits(2);
    	NumberFormat number = NumberFormat.getNumberInstance();
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the principal: ");
    			int principal   = input.nextInt();
    		System.out.print("Enter the number of years: ");
    			int years       = input.nextInt();
    		System.out.print("Enter the interest rate: ");
    			double interest = input.nextDouble();
    	
    	double value = principal * (1 + years * interest);
    	System.out.println("The value after the term is: " + money.format(value) + "\n");
    	
    		System.out.print("Enter the desired amount: ");
    			double amount    = input.nextDouble();
    		System.out.print("Enter the number of years: ");
    			int years2       = input.nextInt();
    		System.out.print("Enter the interest rate: ");
    			double interest2 = input.nextDouble();
    	input.close();
    	
    	double principalValue = amount / (1 + years2 * interest2);
    	System.out.println("The principal that needs to be invested is: " + number.format(principalValue));
    }
}