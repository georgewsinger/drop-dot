goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20503__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20504__i = 0, G__20504__a = new Array(arguments.length -  0);
while (G__20504__i < G__20504__a.length) {G__20504__a[G__20504__i] = arguments[G__20504__i + 0]; ++G__20504__i;}
  args = new cljs.core.IndexedSeq(G__20504__a,0);
} 
return G__20503__delegate.call(this,args);};
G__20503.cljs$lang$maxFixedArity = 0;
G__20503.cljs$lang$applyTo = (function (arglist__20505){
var args = cljs.core.seq(arglist__20505);
return G__20503__delegate(args);
});
G__20503.cljs$core$IFn$_invoke$arity$variadic = G__20503__delegate;
return G__20503;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20506__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20507__i = 0, G__20507__a = new Array(arguments.length -  0);
while (G__20507__i < G__20507__a.length) {G__20507__a[G__20507__i] = arguments[G__20507__i + 0]; ++G__20507__i;}
  args = new cljs.core.IndexedSeq(G__20507__a,0);
} 
return G__20506__delegate.call(this,args);};
G__20506.cljs$lang$maxFixedArity = 0;
G__20506.cljs$lang$applyTo = (function (arglist__20508){
var args = cljs.core.seq(arglist__20508);
return G__20506__delegate(args);
});
G__20506.cljs$core$IFn$_invoke$arity$variadic = G__20506__delegate;
return G__20506;
})()
;

return null;
});
