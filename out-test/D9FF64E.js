goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12914__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12915__i = 0, G__12915__a = new Array(arguments.length -  0);
while (G__12915__i < G__12915__a.length) {G__12915__a[G__12915__i] = arguments[G__12915__i + 0]; ++G__12915__i;}
  args = new cljs.core.IndexedSeq(G__12915__a,0);
} 
return G__12914__delegate.call(this,args);};
G__12914.cljs$lang$maxFixedArity = 0;
G__12914.cljs$lang$applyTo = (function (arglist__12916){
var args = cljs.core.seq(arglist__12916);
return G__12914__delegate(args);
});
G__12914.cljs$core$IFn$_invoke$arity$variadic = G__12914__delegate;
return G__12914;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12917__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12918__i = 0, G__12918__a = new Array(arguments.length -  0);
while (G__12918__i < G__12918__a.length) {G__12918__a[G__12918__i] = arguments[G__12918__i + 0]; ++G__12918__i;}
  args = new cljs.core.IndexedSeq(G__12918__a,0);
} 
return G__12917__delegate.call(this,args);};
G__12917.cljs$lang$maxFixedArity = 0;
G__12917.cljs$lang$applyTo = (function (arglist__12919){
var args = cljs.core.seq(arglist__12919);
return G__12917__delegate(args);
});
G__12917.cljs$core$IFn$_invoke$arity$variadic = G__12917__delegate;
return G__12917;
})()
;

return null;
});
