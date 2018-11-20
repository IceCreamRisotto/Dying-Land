using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class reciprocal : MonoBehaviour {
	
	public int max;
	public Text time_ui;

	void Start(){
		time_ui.text = max.ToString();
		InvokeRepeating ("timer", 1, 1);
	}
	void timer(){
		max -= 1;
		time_ui.text = max + "";
		if (max == 0) {
			time_ui.text="time\nup";
			CancelInvoke ("timer");
		}
	}
}
