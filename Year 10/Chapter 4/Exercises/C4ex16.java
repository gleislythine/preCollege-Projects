import java.util.Scanner;
import java.text.NumberFormat;

public class C4ex16 {
    public static void main(String [] Args) {
    	
    	NumberFormat percent = NumberFormat.getPercentInstance();
    	             percent.setMinimumFractionDigits(2);
    	
    	Scanner input = new Scanner(System.in);
    		System.out.println("Election Results for New York:");
    			System.out.print("Awbrey: ");
    				int a1 = input.nextInt();
    			System.out.print("Martinez: ");
    				int m1 = input.nextInt();
    		System.out.println("\nElection Results for New Jersey:");
    			System.out.print("Awbrey: ");
    				int a2 = input.nextInt();
    			System.out.print("Martinez: ");
    				int m2 = input.nextInt();
    		System.out.println("\nElection Results for Connecticut:");
    			System.out.print("Awbrey: ");
    				int a3 = input.nextInt();
    			System.out.print("Martinez: ");
    				int m3 = input.nextInt();
    	input.close();
    	
    	int awbreyTotal        = a1 + a2 + a3;
    	int martinezTotal      = m1 + m2 + m3;
    	double total              = awbreyTotal + martinezTotal;
    	double awbreyPercent   = awbreyTotal / total;
    	double martinezPercent = martinezTotal / total;
    	
    	System.out.format("%n %-15s %10s %15s", "Candidate", "Votes",       "Percentage");
    	System.out.format("%n %-15s %10s %15s", "Awbrey",    awbreyTotal,   percent.format(awbreyPercent));
    	System.out.format("%n %-15s %10s %15s", "Martinez",  martinezTotal, percent.format(martinezPercent));
    	System.out.format("%n %-15s %10s",      "TOTAL VOTES:", Math.round(total));
    }
}