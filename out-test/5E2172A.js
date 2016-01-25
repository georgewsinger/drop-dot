goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36567__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36568__i = 0, G__36568__a = new Array(arguments.length -  0);
while (G__36568__i < G__36568__a.length) {G__36568__a[G__36568__i] = arguments[G__36568__i + 0]; ++G__36568__i;}
  args = new cljs.core.IndexedSeq(G__36568__a,0);
} 
return G__36567__delegate.call(this,args);};
G__36567.cljs$lang$maxFixedArity = 0;
G__36567.cljs$lang$applyTo = (function (arglist__36569){
var args = cljs.core.seq(arglist__36569);
return G__36567__delegate(args);
});
G__36567.cljs$core$IFn$_invoke$arity$variadic = G__36567__delegate;
return G__36567;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36570__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36571__i = 0, G__36571__a = new Array(arguments.length -  0);
while (G__36571__i < G__36571__a.length) {G__36571__a[G__36571__i] = arguments[G__36571__i + 0]; ++G__36571__i;}
  args = new cljs.core.IndexedSeq(G__36571__a,0);
} 
return G__36570__delegate.call(this,args);};
G__36570.cljs$lang$maxFixedArity = 0;
G__36570.cljs$lang$applyTo = (function (arglist__36572){
var args = cljs.core.seq(arglist__36572);
return G__36570__delegate(args);
});
G__36570.cljs$core$IFn$_invoke$arity$variadic = G__36570__delegate;
return G__36570;
})()
;

return null;
});
