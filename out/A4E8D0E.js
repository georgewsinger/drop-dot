goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34640__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34641__i = 0, G__34641__a = new Array(arguments.length -  0);
while (G__34641__i < G__34641__a.length) {G__34641__a[G__34641__i] = arguments[G__34641__i + 0]; ++G__34641__i;}
  args = new cljs.core.IndexedSeq(G__34641__a,0);
} 
return G__34640__delegate.call(this,args);};
G__34640.cljs$lang$maxFixedArity = 0;
G__34640.cljs$lang$applyTo = (function (arglist__34642){
var args = cljs.core.seq(arglist__34642);
return G__34640__delegate(args);
});
G__34640.cljs$core$IFn$_invoke$arity$variadic = G__34640__delegate;
return G__34640;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34643__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34644__i = 0, G__34644__a = new Array(arguments.length -  0);
while (G__34644__i < G__34644__a.length) {G__34644__a[G__34644__i] = arguments[G__34644__i + 0]; ++G__34644__i;}
  args = new cljs.core.IndexedSeq(G__34644__a,0);
} 
return G__34643__delegate.call(this,args);};
G__34643.cljs$lang$maxFixedArity = 0;
G__34643.cljs$lang$applyTo = (function (arglist__34645){
var args = cljs.core.seq(arglist__34645);
return G__34643__delegate(args);
});
G__34643.cljs$core$IFn$_invoke$arity$variadic = G__34643__delegate;
return G__34643;
})()
;

return null;
});
