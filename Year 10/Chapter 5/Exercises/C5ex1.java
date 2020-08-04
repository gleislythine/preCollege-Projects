/**
 *  Printing
 */

import java.util.Scanner;
import java.text.NumberFormat;

public class C5ex1 {
    public static void main(String [] Args) {
    	
    	NumberFormat money = NumberFormat.getCurrencyInstance();
    	int copies;
    	double copyPrice, total;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the number of copies to be printed: ");
    		copies = input.nextInt();
    	input.close();
    	
    			if (copies > 1000){ copyPrice = .25;
 		 } else if (copies < 1000){ copyPrice = .26;
		 } else if (copies < 749){  copyPrice = .27;
		 } else if (copies < 499){  copyPrice = .28;
		 } else {                   copyPrice = .30; }
		 
    	
    	total = copies * copyPrice;
    	
    	System.out.println("Price per copy is: " + money.format(copyPrice));
    	System.out.println("Total cost is: "     + money.format(total));
    }
}