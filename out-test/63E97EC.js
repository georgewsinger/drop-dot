goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__73202__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__73202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73203__i = 0, G__73203__a = new Array(arguments.length -  0);
while (G__73203__i < G__73203__a.length) {G__73203__a[G__73203__i] = arguments[G__73203__i + 0]; ++G__73203__i;}
  args = new cljs.core.IndexedSeq(G__73203__a,0);
} 
return G__73202__delegate.call(this,args);};
G__73202.cljs$lang$maxFixedArity = 0;
G__73202.cljs$lang$applyTo = (function (arglist__73204){
var args = cljs.core.seq(arglist__73204);
return G__73202__delegate(args);
});
G__73202.cljs$core$IFn$_invoke$arity$variadic = G__73202__delegate;
return G__73202;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__73205__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__73205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73206__i = 0, G__73206__a = new Array(arguments.length -  0);
while (G__73206__i < G__73206__a.length) {G__73206__a[G__73206__i] = arguments[G__73206__i + 0]; ++G__73206__i;}
  args = new cljs.core.IndexedSeq(G__73206__a,0);
} 
return G__73205__delegate.call(this,args);};
G__73205.cljs$lang$maxFixedArity = 0;
G__73205.cljs$lang$applyTo = (function (arglist__73207){
var args = cljs.core.seq(arglist__73207);
return G__73205__delegate(args);
});
G__73205.cljs$core$IFn$_invoke$arity$variadic = G__73205__delegate;
return G__73205;
})()
;

return null;
});
