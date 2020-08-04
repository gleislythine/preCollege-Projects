import java.util.Scanner;
import java.util.Random;
import java.lang.String;
public class Nim {
	public static boolean uservalid(int usertake, int stones) {
		boolean usvalid;
		if (usertake > 3 || usertake <1) {
			usvalid = false;
			
		} else if (usertake > stones) {
			usvalid = false;
		} else {
			usvalid = true;
		}
		
		return(usvalid);
	}
	
	public static boolean compvalid(int comptake, int stones) {
		boolean cpvalid;
		if (comptake > 3 || comptake <1) {
			cpvalid = false;
			
		} else if (comptake > stones) {
			cpvalid = false;
		} else {
			cpvalid = true;
		}
		
		return(cpvalid);
	}
	
	public static int userturn(int stones) {
		int usertake;
		boolean check;
		Scanner in = new Scanner(System.in);
		System.out.print("There are " + stones + " stones. How many would you like to take? ");
		usertake = in.nextInt();
		check = uservalid(usertake, stones);
		
		if (check) {
			return(usertake);
		} else {
			System.out.print("Wrong input. Please enter a valid number.\n");
			return userturn(stones);
		}
	}
	
	public static int compturn(int stones) {
		int comptake;
		boolean check;
		Random r = new Random();
		comptake = r.nextInt(3) + 1;
		check = compvalid(comptake, stones);
		
		if (check) {
			return(comptake);
		} else {
			return compturn(stones);
		}
	}
	
	public static void main (String [] args) {
		int stones;
		int winn = 0;
		String winner = "N/A";
		Random r = new Random();
		stones = r.nextInt(16) + 15;
		
		while (winn != 1) {
			stones = stones - userturn(stones);
			if (stones == 0) {
				winn = 1;
				winner = "Computer Wins!";
			} else {
				stones = stones - compturn(stones);
				if (stones == 0) {
				winn = 1;
				winner = "You Win!";
				}
			}
		}
		
		System.out.print(winner);
	}
}