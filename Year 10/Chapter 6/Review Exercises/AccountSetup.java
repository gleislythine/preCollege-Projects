/**
 *  Chyna Sarmiento
 *  Account Setup
 */
 
import java.util.Scanner;

public class AccountSetup {
    public static void main(String[] args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter a user name: ");
    		String username  = input.nextLine();
    		
    		System.out.print("Enter a password that is at least 8 characters: ");
    		String password = input.nextLine();
    	input.close();
    }
}
