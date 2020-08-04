import java.util.Scanner;
import java.text.NumberFormat;

public class C4ex12 {
    public static void main(String [] Args) {
    	
    	NumberFormat percent = NumberFormat.getPercentInstance();
    	             percent.setMinimumFractionDigits(2);
    	             
    	Scanner input = new Scanner(System.in);
    		System.out.println("Enter the number of minutes spent on each of the following project tasks:");
    			System.out.print("Designing: ");
    				int designing = input.nextInt();
    			System.out.print("Debugging: ");
    				int coding    = input.nextInt();
    			System.out.print("Coding: ");
    				int debugging = input.nextInt();
    			System.out.print("Testing: ");
    				int testing   = input.nextInt();
    	input.close();
    	
    	double total     = designing + coding + debugging + testing;
    	double design = designing / total;
    	double code   = coding    / total;
    	double debug  = debugging / total;
    	double test   = testing   / total;
    	
    	System.out.format("%-15s %-1s", "\nTask",      "% Time");
    	System.out.format("%-15s %-1s", "\nDesigning", percent.format(design));
    	System.out.format("%-15s %-1s", "\nCoding",    percent.format(code));
    	System.out.format("%-15s %-1s", "\nDebugging", percent.format(debug));
    	System.out.format("%-15s %-1s", "\nTesting",   percent.format(test));
    }
}