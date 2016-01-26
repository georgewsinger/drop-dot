goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__290286__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__290286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290287__i = 0, G__290287__a = new Array(arguments.length -  0);
while (G__290287__i < G__290287__a.length) {G__290287__a[G__290287__i] = arguments[G__290287__i + 0]; ++G__290287__i;}
  args = new cljs.core.IndexedSeq(G__290287__a,0);
} 
return G__290286__delegate.call(this,args);};
G__290286.cljs$lang$maxFixedArity = 0;
G__290286.cljs$lang$applyTo = (function (arglist__290288){
var args = cljs.core.seq(arglist__290288);
return G__290286__delegate(args);
});
G__290286.cljs$core$IFn$_invoke$arity$variadic = G__290286__delegate;
return G__290286;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__290289__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__290289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__290290__i = 0, G__290290__a = new Array(arguments.length -  0);
while (G__290290__i < G__290290__a.length) {G__290290__a[G__290290__i] = arguments[G__290290__i + 0]; ++G__290290__i;}
  args = new cljs.core.IndexedSeq(G__290290__a,0);
} 
return G__290289__delegate.call(this,args);};
G__290289.cljs$lang$maxFixedArity = 0;
G__290289.cljs$lang$applyTo = (function (arglist__290291){
var args = cljs.core.seq(arglist__290291);
return G__290289__delegate(args);
});
G__290289.cljs$core$IFn$_invoke$arity$variadic = G__290289__delegate;
return G__290289;
})()
;

return null;
});
