goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24203__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24204__i = 0, G__24204__a = new Array(arguments.length -  0);
while (G__24204__i < G__24204__a.length) {G__24204__a[G__24204__i] = arguments[G__24204__i + 0]; ++G__24204__i;}
  args = new cljs.core.IndexedSeq(G__24204__a,0);
} 
return G__24203__delegate.call(this,args);};
G__24203.cljs$lang$maxFixedArity = 0;
G__24203.cljs$lang$applyTo = (function (arglist__24205){
var args = cljs.core.seq(arglist__24205);
return G__24203__delegate(args);
});
G__24203.cljs$core$IFn$_invoke$arity$variadic = G__24203__delegate;
return G__24203;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24206__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24207__i = 0, G__24207__a = new Array(arguments.length -  0);
while (G__24207__i < G__24207__a.length) {G__24207__a[G__24207__i] = arguments[G__24207__i + 0]; ++G__24207__i;}
  args = new cljs.core.IndexedSeq(G__24207__a,0);
} 
return G__24206__delegate.call(this,args);};
G__24206.cljs$lang$maxFixedArity = 0;
G__24206.cljs$lang$applyTo = (function (arglist__24208){
var args = cljs.core.seq(arglist__24208);
return G__24206__delegate(args);
});
G__24206.cljs$core$IFn$_invoke$arity$variadic = G__24206__delegate;
return G__24206;
})()
;

return null;
});
