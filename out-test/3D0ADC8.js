goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16953__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16954__i = 0, G__16954__a = new Array(arguments.length -  0);
while (G__16954__i < G__16954__a.length) {G__16954__a[G__16954__i] = arguments[G__16954__i + 0]; ++G__16954__i;}
  args = new cljs.core.IndexedSeq(G__16954__a,0);
} 
return G__16953__delegate.call(this,args);};
G__16953.cljs$lang$maxFixedArity = 0;
G__16953.cljs$lang$applyTo = (function (arglist__16955){
var args = cljs.core.seq(arglist__16955);
return G__16953__delegate(args);
});
G__16953.cljs$core$IFn$_invoke$arity$variadic = G__16953__delegate;
return G__16953;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16956__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16956 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16957__i = 0, G__16957__a = new Array(arguments.length -  0);
while (G__16957__i < G__16957__a.length) {G__16957__a[G__16957__i] = arguments[G__16957__i + 0]; ++G__16957__i;}
  args = new cljs.core.IndexedSeq(G__16957__a,0);
} 
return G__16956__delegate.call(this,args);};
G__16956.cljs$lang$maxFixedArity = 0;
G__16956.cljs$lang$applyTo = (function (arglist__16958){
var args = cljs.core.seq(arglist__16958);
return G__16956__delegate(args);
});
G__16956.cljs$core$IFn$_invoke$arity$variadic = G__16956__delegate;
return G__16956;
})()
;

return null;
});
