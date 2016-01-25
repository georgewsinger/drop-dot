goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61955__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61956__i = 0, G__61956__a = new Array(arguments.length -  0);
while (G__61956__i < G__61956__a.length) {G__61956__a[G__61956__i] = arguments[G__61956__i + 0]; ++G__61956__i;}
  args = new cljs.core.IndexedSeq(G__61956__a,0);
} 
return G__61955__delegate.call(this,args);};
G__61955.cljs$lang$maxFixedArity = 0;
G__61955.cljs$lang$applyTo = (function (arglist__61957){
var args = cljs.core.seq(arglist__61957);
return G__61955__delegate(args);
});
G__61955.cljs$core$IFn$_invoke$arity$variadic = G__61955__delegate;
return G__61955;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61958__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61959__i = 0, G__61959__a = new Array(arguments.length -  0);
while (G__61959__i < G__61959__a.length) {G__61959__a[G__61959__i] = arguments[G__61959__i + 0]; ++G__61959__i;}
  args = new cljs.core.IndexedSeq(G__61959__a,0);
} 
return G__61958__delegate.call(this,args);};
G__61958.cljs$lang$maxFixedArity = 0;
G__61958.cljs$lang$applyTo = (function (arglist__61960){
var args = cljs.core.seq(arglist__61960);
return G__61958__delegate(args);
});
G__61958.cljs$core$IFn$_invoke$arity$variadic = G__61958__delegate;
return G__61958;
})()
;

return null;
});
