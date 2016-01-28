goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__390701__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__390701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__390702__i = 0, G__390702__a = new Array(arguments.length -  0);
while (G__390702__i < G__390702__a.length) {G__390702__a[G__390702__i] = arguments[G__390702__i + 0]; ++G__390702__i;}
  args = new cljs.core.IndexedSeq(G__390702__a,0);
} 
return G__390701__delegate.call(this,args);};
G__390701.cljs$lang$maxFixedArity = 0;
G__390701.cljs$lang$applyTo = (function (arglist__390703){
var args = cljs.core.seq(arglist__390703);
return G__390701__delegate(args);
});
G__390701.cljs$core$IFn$_invoke$arity$variadic = G__390701__delegate;
return G__390701;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__390704__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__390704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__390705__i = 0, G__390705__a = new Array(arguments.length -  0);
while (G__390705__i < G__390705__a.length) {G__390705__a[G__390705__i] = arguments[G__390705__i + 0]; ++G__390705__i;}
  args = new cljs.core.IndexedSeq(G__390705__a,0);
} 
return G__390704__delegate.call(this,args);};
G__390704.cljs$lang$maxFixedArity = 0;
G__390704.cljs$lang$applyTo = (function (arglist__390706){
var args = cljs.core.seq(arglist__390706);
return G__390704__delegate(args);
});
G__390704.cljs$core$IFn$_invoke$arity$variadic = G__390704__delegate;
return G__390704;
})()
;

return null;
});
