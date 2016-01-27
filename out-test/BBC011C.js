goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36841__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36842__i = 0, G__36842__a = new Array(arguments.length -  0);
while (G__36842__i < G__36842__a.length) {G__36842__a[G__36842__i] = arguments[G__36842__i + 0]; ++G__36842__i;}
  args = new cljs.core.IndexedSeq(G__36842__a,0);
} 
return G__36841__delegate.call(this,args);};
G__36841.cljs$lang$maxFixedArity = 0;
G__36841.cljs$lang$applyTo = (function (arglist__36843){
var args = cljs.core.seq(arglist__36843);
return G__36841__delegate(args);
});
G__36841.cljs$core$IFn$_invoke$arity$variadic = G__36841__delegate;
return G__36841;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36844__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36844 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36845__i = 0, G__36845__a = new Array(arguments.length -  0);
while (G__36845__i < G__36845__a.length) {G__36845__a[G__36845__i] = arguments[G__36845__i + 0]; ++G__36845__i;}
  args = new cljs.core.IndexedSeq(G__36845__a,0);
} 
return G__36844__delegate.call(this,args);};
G__36844.cljs$lang$maxFixedArity = 0;
G__36844.cljs$lang$applyTo = (function (arglist__36846){
var args = cljs.core.seq(arglist__36846);
return G__36844__delegate(args);
});
G__36844.cljs$core$IFn$_invoke$arity$variadic = G__36844__delegate;
return G__36844;
})()
;

return null;
});
