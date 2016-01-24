goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62015__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62016__i = 0, G__62016__a = new Array(arguments.length -  0);
while (G__62016__i < G__62016__a.length) {G__62016__a[G__62016__i] = arguments[G__62016__i + 0]; ++G__62016__i;}
  args = new cljs.core.IndexedSeq(G__62016__a,0);
} 
return G__62015__delegate.call(this,args);};
G__62015.cljs$lang$maxFixedArity = 0;
G__62015.cljs$lang$applyTo = (function (arglist__62017){
var args = cljs.core.seq(arglist__62017);
return G__62015__delegate(args);
});
G__62015.cljs$core$IFn$_invoke$arity$variadic = G__62015__delegate;
return G__62015;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62018__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62019__i = 0, G__62019__a = new Array(arguments.length -  0);
while (G__62019__i < G__62019__a.length) {G__62019__a[G__62019__i] = arguments[G__62019__i + 0]; ++G__62019__i;}
  args = new cljs.core.IndexedSeq(G__62019__a,0);
} 
return G__62018__delegate.call(this,args);};
G__62018.cljs$lang$maxFixedArity = 0;
G__62018.cljs$lang$applyTo = (function (arglist__62020){
var args = cljs.core.seq(arglist__62020);
return G__62018__delegate(args);
});
G__62018.cljs$core$IFn$_invoke$arity$variadic = G__62018__delegate;
return G__62018;
})()
;

return null;
});
