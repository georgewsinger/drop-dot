goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19539__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19540__i = 0, G__19540__a = new Array(arguments.length -  0);
while (G__19540__i < G__19540__a.length) {G__19540__a[G__19540__i] = arguments[G__19540__i + 0]; ++G__19540__i;}
  args = new cljs.core.IndexedSeq(G__19540__a,0);
} 
return G__19539__delegate.call(this,args);};
G__19539.cljs$lang$maxFixedArity = 0;
G__19539.cljs$lang$applyTo = (function (arglist__19541){
var args = cljs.core.seq(arglist__19541);
return G__19539__delegate(args);
});
G__19539.cljs$core$IFn$_invoke$arity$variadic = G__19539__delegate;
return G__19539;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19542__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19543__i = 0, G__19543__a = new Array(arguments.length -  0);
while (G__19543__i < G__19543__a.length) {G__19543__a[G__19543__i] = arguments[G__19543__i + 0]; ++G__19543__i;}
  args = new cljs.core.IndexedSeq(G__19543__a,0);
} 
return G__19542__delegate.call(this,args);};
G__19542.cljs$lang$maxFixedArity = 0;
G__19542.cljs$lang$applyTo = (function (arglist__19544){
var args = cljs.core.seq(arglist__19544);
return G__19542__delegate(args);
});
G__19542.cljs$core$IFn$_invoke$arity$variadic = G__19542__delegate;
return G__19542;
})()
;

return null;
});
