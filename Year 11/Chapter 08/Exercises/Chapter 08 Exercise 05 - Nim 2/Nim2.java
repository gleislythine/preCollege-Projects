/**
 * Chyna Sarmiento
 * 07 November 2017
 * P1: AP Computer Science
 * 
 * Chapter 08 Exercise 05: Nim 2
 * Client Code
 */

import java.util.Scanner;
import java.lang.Math;

public class Nim2{		
    public static void main(String[] args){
    	nimPlayer nPlayer = new nimPlayer();
    	
    	int ranStones = (int)(16 * Math.random() + 15);
		int winn = 0;
		String winner = "";
		
		while (winn != 1) {
			ranStones = ranStones - nPlayer.userTurn(ranStones);
			if (ranStones == 0) {
				winn = 1;
				winner = "Computer Wins!";
			} else {
				ranStones = ranStones - nPlayer.compTurn(ranStones);
				if (ranStones == 0) {
				winn = 1;
				winner = "You Win!";
				}
			}
		}
		
		System.out.print(winner);
    }
}