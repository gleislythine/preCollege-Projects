import java.util.Scanner;
import java.text.NumberFormat;

public class C4ex10 {
    public static void main(String [] Args) {
    	
    	NumberFormat decimal = NumberFormat.getNumberInstance();
    		
    	Scanner input   = new Scanner(System.in);
    		System.out.println("Enter your birthdate:");
    			System.out.print("Year: ");
    				int bYear   = input.nextInt();
    			System.out.print("Month: ");
    				int bMonth  = input.nextInt();
    			System.out.print("Day: ");
    				int bDay    = input.nextInt();
    	
    		System.out.println("Enter today's date:");
    			System.out.print("Year: ");
    				int tYear   = input.nextInt();
    			System.out.print("Month: ");
    				int tMonth  = input.nextInt();
    			System.out.print("Day: ");
    				int tDay    = input.nextInt();
    	input.close();
        
    	int years    = (tYear  - bYear)  * 365;
    	int months   = (tMonth - bMonth) * 30;
    	int days     =  tDay   - bDay;
    	int aliveFor = years + months + days;
    	System.out.println("You have been alive for " + decimal.format(aliveFor)     + " days.");
    	System.out.println("You have slept "          + decimal.format(aliveFor * 8) + " hours.");
    }
}