import java.util.Scanner;
import java.text.NumberFormat;

public class C4ex11 {
    public static void main(String [] Args) {
    	
    	NumberFormat money = NumberFormat.getCurrencyInstance();
    	
    	Scanner input = new Scanner(System.in);
    			System.out.print("Enter the number of burgers: ");
    				int burgers = input.nextInt();
    			System.out.print("Enter the number of fries: ");
    				int fries   = input.nextInt();
    			System.out.print("Enter the number of soda/s: ");
    				int sodas   = input.nextInt();
    	
    	double noTax      = (burgers * 1.69) + (fries * 1.09) + (sodas  * 0.99);
    	double withTax    = noTax * 0.065;
    	double finalTotal = noTax + withTax;
    		
    	System.out.println("Total before tax: " + money.format(noTax));
    	System.out.println("Tax: "              + money.format(withTax));
    	System.out.println("Final total: "      + money.format(finalTotal) + "\n");
    	
    			System.out.print("Enter the amount tendered: $");
    				int bills = input.nextInt();
    	
    	double change = bills - finalTotal;
    	System.out.println("Change: " + money.format(change));
    	input.close();
    }
}