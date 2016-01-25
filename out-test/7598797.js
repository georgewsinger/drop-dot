goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59043__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59044__i = 0, G__59044__a = new Array(arguments.length -  0);
while (G__59044__i < G__59044__a.length) {G__59044__a[G__59044__i] = arguments[G__59044__i + 0]; ++G__59044__i;}
  args = new cljs.core.IndexedSeq(G__59044__a,0);
} 
return G__59043__delegate.call(this,args);};
G__59043.cljs$lang$maxFixedArity = 0;
G__59043.cljs$lang$applyTo = (function (arglist__59045){
var args = cljs.core.seq(arglist__59045);
return G__59043__delegate(args);
});
G__59043.cljs$core$IFn$_invoke$arity$variadic = G__59043__delegate;
return G__59043;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59046__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59047__i = 0, G__59047__a = new Array(arguments.length -  0);
while (G__59047__i < G__59047__a.length) {G__59047__a[G__59047__i] = arguments[G__59047__i + 0]; ++G__59047__i;}
  args = new cljs.core.IndexedSeq(G__59047__a,0);
} 
return G__59046__delegate.call(this,args);};
G__59046.cljs$lang$maxFixedArity = 0;
G__59046.cljs$lang$applyTo = (function (arglist__59048){
var args = cljs.core.seq(arglist__59048);
return G__59046__delegate(args);
});
G__59046.cljs$core$IFn$_invoke$arity$variadic = G__59046__delegate;
return G__59046;
})()
;

return null;
});
